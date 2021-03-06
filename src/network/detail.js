import { request } from "./request";

export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}
export function getRecommendData() {
    return request({
        url: "/recommend"
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.OldPrice = itemInfo.discountDesc
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.discount = itemInfo.discountDesc
    }   
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class GoodsParam {
    constructor(info, rule) {
        this.image = info.image ? info.image[0] : '';
        this.info = info.set;
        this.rule = rule.tables;
    }
}