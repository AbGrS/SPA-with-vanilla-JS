document.getElementById("category").addEventListener('click', (e)=>{
    location.href = location.origin + location.pathname + '#' + e.target.id; 
    
    //window.open(location.origin + '#' +e.target.id, '_open'+new Date());
});



var module = {
    books : [],
    laptops : [],
    shoes : [],
    setAllRenderedNull: ()=>{
        document.getElementById('booksRenderer').innerHTML = null;
        document.getElementById('laptopsRenderer').innerHTML = null;
        document.getElementById('shoesRenderer').innerHTML = null;
    },
    renderSpecificItem: (items, renderId)=>{
        var temp = document.createElement('div');
        
        items.map(eachBook =>{
            var span = document.createElement('span');
            span.innerText = eachBook.name;
            temp.appendChild(span);
            temp.appendChild(document.createElement('br'));
        });
        module.setAllRenderedNull();
        document.getElementById(renderId).appendChild(temp);
    },
    renderOnPageLoadOrURlChange: ()=>{
        var currentHash = location.hash.substr(1);
    if(currentHash === 'books'){
        var books = [
            {
                id: 1,
                name: "ABC books",
                author: "Xyz",
            },
            {
                id: 2,
                name: "XYZ books",
                author: "Xyz",
            },
            {
                id: 1,
                name: "My books",
                author: "Xyz",
            },
        ];
        module.renderSpecificItem(books, 'booksRenderer');
        
    }else if(currentHash === 'laptops'){
       var laptops = [
           { 
               id: 1,
               name: "MacBook Air",
            },
            { 
                id: 2,
                name: "MacBook Pro",
             },
             { 
                id: 3,
                name: "Windows Pro",
             },

        ];
        module.renderSpecificItem(laptops, 'laptopsRenderer');
    }else if(currentHash === 'shoes'){
        var shoes = [
            {
                id: 1,
                name: 'Adidas'
            },
            {
                id: 2,
                name: 'Nike'
            }
        ];
        module.renderSpecificItem(shoes, 'shoesRenderer');
    }else{
        module.setAllRenderedNull();
    }
    }
};

window.addEventListener('popstate', ()=>{
    module.renderOnPageLoadOrURlChange();

});

window.onload = ()=>{
    module.renderOnPageLoadOrURlChange();
}