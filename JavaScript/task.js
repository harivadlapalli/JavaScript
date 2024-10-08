var details=[
    {
        brand:"Apple",
        price:85000,
        model:"iphone 10s"
    },
    {
        brand:"Apple",
        price:75000,
        model:"iphone 12s"
    },
    {
        brand:"Sumsung",
        price:65000,
        model:"sum gelaxy95"
    },
    {
        brand:"Sumsung",
        price:95000,
        model:"sum gelaxy96"
    }
]

var filteredData=details.filter(function(element){
    return (element.brand==="Apple" || element.brand==="Sumsung") && element.price>80000;
})

console.log(filteredData);