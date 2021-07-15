export default class useful_functions {
  sort_carousel(listOfObjs, maxItems) {
    let i = 0;
    let temp_list = [];
    let res_list = [];
    if (listOfObjs.length <= maxItems) {
      return [listOfObjs];
    }
    for (i = 0; i < listOfObjs.length; i++) {
      if (temp_list.length < maxItems - 1) {
        temp_list.push(listOfObjs[i]);
      } else {
        temp_list.push(listOfObjs[i]);
        res_list.push(temp_list);
        temp_list = [];
      }
    }
    if (temp_list.length > 0) {
      res_list.push(temp_list);
    }
    return res_list;
  }
}
