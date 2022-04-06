import {IAdapter} from "@/lib/adapter/adapter.interface"
import {Indexer} from "@/lib/backup/indexer"
import {
    ArchiveCardResponse,
    CloneCardRequest,
    CloneCardResponse,
    UpsertCardRequest,
    UpsertCardResponse,
    CreateWorkspaceRequest,
    UpdateWorkspaceRequest,
    UpdateWorkspaceResponse,
    CreateWorkspaceResponse,
    ListCardItemsResponse,
    ListCardsResponse,
    ListWorkspacesResponse,
    Login0Request,
    Login0Response,
    Login1Request,
    Login1Response,
    RegistrationRequest,
    TerminateRequest,
    WhoAmIResponse,
    UpdateCredentialsRequest,
    UpdateCredentialsResponse,
    LoginOtpRequest,
    LoginOtpResponse,
    OtpIssueResponse,
    OtpEnableRequest,
    FindUserResponse,
    FindUserRequest,
    CreateShareRequest,
    CreateShareResponse,
    ListShareResponse,
} from "@/desc/alice_v1_pb"

export class AdapterSpa implements IAdapter {
    private readonly index: Indexer

    constructor(dump: Uint8Array) {
        this.index = new Indexer(dump)
    }

    async init(): Promise<void> {
        await this.index.index()
    }

    @unavailable
    backup() {
    }

    @unavailable
    async register(req: RegistrationRequest) {
    }

    @unavailable
    async auth0(req: Login0Request): Promise<Login0Response> {
        return <any>null
    }

    @unavailable
    async auth1(req: Login1Request): Promise<Login1Response> {
        return <any>null
    }

    @unavailable
    async otp(req: LoginOtpRequest): Promise<LoginOtpResponse> {
        return <any>null
    }

    @unavailable
    async otpIssue(): Promise<OtpIssueResponse> {
        return <any>null
    }

    @unavailable
    async otpEnable(req: OtpEnableRequest) {
        return <any>null
    }

    @unavailable
    async otpDisable() {
        return <any>null
    }

    async logout() {
        // just do nothing
    }

    async whoami(): Promise<WhoAmIResponse> {
        const res = this.index.user
        // force set readonly role, to disable any possible
        // mutation actions
        res.getUser()!.setReadonly(true)
        return res
    }

    async listWorkspaces(): Promise<ListWorkspacesResponse> {
        const res = new ListWorkspacesResponse()
        res.setItemsList(this.index.workspaces)
        return res
    }

    async listCards(workspaceId: string): Promise<ListCardsResponse> {
        const res = new ListCardsResponse()
        this.index.cards.forEach((card) => {
            if (card.getWorkspaceId() === workspaceId) res.addItems(card)
        })
        return res
    }

    @unavailable
    async updateCredentials(req: UpdateCredentialsRequest): Promise<UpdateCredentialsResponse> {
        return <any>null
    }

    @unavailable
    async createWorkspace(req: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
        return <any>null
    }

    @unavailable
    async updateWorkspace(id: string, req: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
        return <any>null
    }

    @unavailable
    async deleteWorkspace(id: string) {
        return <any>null
    }

    @unavailable
    async cloneCard(req: CloneCardRequest, workspaceId: string, id: string): Promise<CloneCardResponse> {
        return <any>null
    }

    @unavailable
    async deleteCard(workspaceId: string, id: string): Promise<void> {
        return <any>null
    }

    async listCardItems(workspaceId: string, id: string): Promise<ListCardItemsResponse> {
        const res = new ListCardItemsResponse()
        this.index.cardItems.forEach((item) => {
            if (item.getCardId() === id) res.addItems(item)
        })
        return res
    }

    @unavailable
    async archiveCard(workspaceId: string, id: string): Promise<ArchiveCardResponse> {
        return <any>null
    }

    @unavailable
    async terminate(req: TerminateRequest): Promise<void> {
        return <any>null
    }

    @unavailable
    async createCard(workspaceId: string, req: UpsertCardRequest): Promise<UpsertCardResponse> {
        return <any>null
    }

    @unavailable
    async updateCard(workspaceId: string, cardId: string, req: UpsertCardRequest): Promise<UpsertCardResponse> {
        return <any>null
    }

    @unavailable
    async findUser(req: FindUserRequest): Promise<FindUserResponse> {
        return <any>null
    }

    @unavailable
    async createShare(workspaceId: string, req: CreateShareRequest): Promise<CreateShareResponse> {
        return <any>null
    }

    @unavailable
    async deleteShare(id: string): Promise<void>{
        return <any>null
    }

    /**
     * returns an empty response with zero shares
     */
    async listShares(workspaceId: string): Promise<ListShareResponse> {
        return new ListShareResponse()
    }
}

function unavailable<T>(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = () => {
        const message = `method <${propertyKey}> is unavailable for SPA mode`
        alert(message)
        throw(message)
    }
}
