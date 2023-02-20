const products = [
    {name:"T-shirt 0", price: 20, color:"blue", size: "L"}, //json object
    {name:"T-shirt 1", price: 25, color:"red", size: "M"},
    {name:"T-shirt 2", price: 35, color:"magenta", size: "S"},
    {name:"T-shirt 3", price: 15, color:"green", size: "L"},
    {name:"T-shirt 4", price: 45, color:"orange", size: "M"},
    {name:"T-shirt 5", price: 25, color:"bordo", size: "S"} 
];

let selectedColor = '';

$('.color-box').click(function(){
    let elements = $('.color-box');
    for(let i = 0; i < elements.length; i++){
        $(elements[i]).removeClass('color-box-selected');
    }
    //console.log(elements);

    //console.log( $(this).data('id') ) 

    selectedColor = $(this).data('id');

    $(this).addClass('color-box-selected');
    //console.log('test');
});

function showProducts(prods){   
    let html = '<div class="row">';
    
    for(let i = 0; i < prods.length; i++){
        html += '<div class="col-4 border">';
        html += `<div>${prods[i].name}</div>`;
        html += `<div>${prods[i].price}$</div>`;
        html += `<div>${prods[i].color}</div>`;
        html += `<div>${prods[i].size}</div>`;
        html +='</div>';
    }

    html += '</div>';

    $('#products').html(html);
} 

$(function(){
   showProducts(products); 
   $('#filter').click(function(){
        let priceFrom = parseFloat($('#priceFrom').val());
        let priceTo = parseFloat($('#priceTo').val());
        //$('input[type = "checkbox"]')
        let checkboxes = $('.size');
        let sizes = []; 
        $(checkboxes).each(function(key, value) { 
            
            if($(value).is(':checked') === true){
                sizes.push($(value).val());
            }
        });
        //selectedColor already set 

        let filteredProducts = products.filter(p=>{
           
            if(selectedColor !== '' && p.color !== selectedColor){
                return false;
            }

            if(priceFrom >= 0 && p.price < priceFrom){
                return false;
            }

            if(priceTo >= 0 && p.price > priceTo){
                return false;
            }

            if(sizes.length > 0 && !sizes.includes(p.size)){ 
                return false;
            }

            return true;
        }); 

        showProducts(filteredProducts);
   });
});