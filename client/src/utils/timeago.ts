import { format } from "@astroimg/timeago";
import i18n from "i18next";

export function timeago(time: string | number | Date) {
    let locale = 'en';
    if (i18n.language === 'zh-CN') {
        locale = 'zh-CN';
    } else if (i18n.language === 'zh-TW') {
        locale = 'zh-TW';
    }
    return format(time, "DEFAULT", locale);
}