

const main = (data)=>{
    for(var i=0;i<data.length;i++){
        console.log(data[i].querySelector('a.gs-title').href);
    }
}

//because not load page in one time,some data can't get.the function to wait the data load
const query_load = (sel) =>{
    const query =()=>{
        let data = document.querySelectorAll(sel);
        if(data.length!=0){
            clearInterval(num);
            main(data);
        }
    }
    query();
}
let num = setInterval("query_load('.gsc-webResult.gsc-result')",100);


const dom_listenser=(idName,mutationHandler)=>{
        let target = document.querySelector(idName);
        let config = { attributes: true, childList: true, characterData: true,subtree:true};
        let observer = new MutationObserver(mutationHandler);
        observer.observe(target, config);
};

/*
dom_listenser ('head',(mutations)=>{
    mutations.forEach((mutation)=>{
        console.log(mutation.target.text);
        if(mutation.target == 'head'){
            console.log('have');
        }
    });

});
*/

