const boxes=document.querySelectorAll(".box");

count=0;
var x=[];
var o=[];
var win=[['one','two','three'],['one','four','seven'],['one','five','nine'],['two','five','eight'],['three','six','nine'],['three','five','seven'],['four','five','six'],['seven','eight','nine']];

boxes.forEach(item =>{
    item.addEventListener('click',()=>{
        count++
        if(count%2===0)
        {
            item.children[1].classList.remove("oo");
            item.children[0].remove();
            o.push(item.classList[1]);
        }
        else{
            item.children[0].classList.remove("xx");
            item.children[1].remove();
            x.push(item.classList[1]);
        }
        // for(var i=0;i<win.length;i++)
        // {
        //     console.log(win[i]);
        // };
        
    },{once : true})
});

// win.forEach(item=>{
//     item.forEach(item=>{
//         console.log(item);
//     });
// });

for(var i=0;i<win.length;i++)
{
   
};



