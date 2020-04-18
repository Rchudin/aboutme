import {Dispatch} from 'redux';
import {BillboardsActionTypes, SET_BILLBOARDS} from "../reducers/billboardsReducer";



export const setBillboards = (images: string[]): BillboardsActionTypes => {
    return {
        type: SET_BILLBOARDS,
        images
    }
};

export const loadBillboards = (count: number) => async (dispatch: Dispatch): Promise<void> => {

    // const {loginReducer: {token}} = getState();
    // const data = await billboardsAPI.getImages({count, token});
    // if (data.status === 200) {
    //     dispatch(setBillboards(data.response));
    // }else{
    const bill = [];
    for (let i = 0; i < count * 5; i += 5) {
        bill[i] = `https://picsum.photos/1280/720?random=${i}`;
        bill[i + 1] = `https://picsum.photos/720/1280?random=${i + 1}`;
        bill[i + 2] = `https://picsum.photos/500/500?random=${i + 2}`;
        bill[i + 3] = `https://picsum.photos/720/1280?random=${i + 3}`;
        bill[i + 4] = `https://picsum.photos/1280/720?random=${i + 4}`;
        // bill[i+2] = `https://picsum.photos/500/500?random=${i+3}`;
        //
        // bill[i+3] = `https://picsum.photos/1280/720?random=${i+4}`;
        // bill[i+1] = `https://picsum.photos/600/1200?random=${i+1}`;

    }
    dispatch(setBillboards(bill));
    // }


};