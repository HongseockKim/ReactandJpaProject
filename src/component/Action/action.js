import * as types from '../ActionType/ActionType';

export function todoDetailInfo(datas) {
    return   {
        type: types.GETTODODETAILINFO,
        id:datas.id,
        title:datas.title,
        content:datas.contnet,
    }
}

export function getTodo(datas) {
    return   {
        type: types.GETDASHBORAD,
        todo:datas
    }
}


