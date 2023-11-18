import _ from "lodash";


export const returnPaginationRange = ( totalPage, page, limit,sibling) => {

    let totalPageNoInArray = 7 + sibling;
    if(totalPageNoInArray >= totalPage) {
       return _.range(1,totalPage + 1);
    }

    let leftSiblingIndex = Math.max(page-sibling, 1);
    let rightSiblingIndex = Math.min(page+sibling, totalPage);

    let showLeftDots = leftSiblingIndex>2;
    let showRightDots = rightSiblingIndex<totalPage-2;

    if(!showLeftDots && showRightDots) {
        let LeftItemsCount = 3+2*sibling;
        let leftRange = _.range(1,LeftItemsCount+1);
        return [...leftRange,"...",totalPage];
    }
    else if (showLeftDots && !showRightDots) {
        let rightItemsCount = 3 +2 * sibling;
        let rightRange = _.range(totalPage - rightItemsCount +1, totalPage+1);
        return [1,"...",...rightRange]
        
    }
    else {
        let middleRange = _.range(leftSiblingIndex,rightSiblingIndex+1);
        return [1, "..." , ...middleRange, "..." , totalPage];
    }
}