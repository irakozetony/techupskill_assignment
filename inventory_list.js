function inventoryList(){
    itemCollection = []

    function add(itemName){
        itemCollection.push(itemName)
        return itemCollection
    }

    function remove(itemName){
        itemCollection.splice(itemCollection.indexOf(itemName))
        return itemCollection
    }
}