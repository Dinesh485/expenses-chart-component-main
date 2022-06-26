

(async () =>{
  const m = 3;
  const chart = document.querySelector('#chart')
  const res = await fetch('./assets/js/data.json')
  const data = await res.json()
  data.forEach(d =>{
     chart.innerHTML +=`<div class = ' flex flex-col justify-end items-center  w-full gap-3'>
     <div class = ' w-full rounded relative group transition-all duration-150  ${d.amount>50? 'bg-Cyan hover:bg-Cyan/70 ':'bg-Soft-red hover:bg-Soft-red/70'}' style ='height : ${d.amount*m}px'>
     <p class = 'px-2 py-1 bg-Dark-brown text-Very-pale-orange rounded-md mb-[5px] text-sm absolute bottom-full left-1/2 -translate-x-1/2 z-50 opacity-0 transition-opacity duration-150 group-hover:opacity-100 '>$${d.amount}</p>    
     </div> 
     <p class ='text-Medium-brown text-sm'>${d.day}</p>
   </div>`
  })
})()