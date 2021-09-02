export function actionSavePark(park){
    return {
        type: 'SAVE_PARK',
        park: park
    }

}

export function actionRemovePark(park){
    return {
        type: 'REMOVE_PARK',
        park: park
    }
}