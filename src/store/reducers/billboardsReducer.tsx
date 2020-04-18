export const SET_BILLBOARDS = "billboards/SET_BILLBOARDS";

export type InitializingBillboardsStateType = {
    images: string[]
}

const InitializingState: InitializingBillboardsStateType = {
    images: [],
};

export default (state = InitializingState, action: BillboardsActionTypes): InitializingBillboardsStateType => {
    switch (action.type) {
        case SET_BILLBOARDS:
            return {
                ...state,
                images: action.images,
            };
        default:
            return state;
    }
};

export type BillboardsActionTypes = SendBillboardsAction

interface SendBillboardsAction {
    type: typeof SET_BILLBOARDS
    images: string[]
}

