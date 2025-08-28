
function openBooking(){
  document.getElementById('booking').scrollIntoView({behavior:'smooth'});
}
function copyEmail(){
  navigator.clipboard.writeText('bookyouspaday@gmail.com');
  const el=document.getElementById('copyNote'); if(el){el.textContent='Email copied ✔'; setTimeout(()=>el.textContent='',2000)}
}
function handleBooking(e){
  e.preventDefault();
  const svc=document.getElementById('svc').value;
  const date=document.getElementById('date').value;
  const time=document.getElementById('time').value;
  const name=document.getElementById('name').value;
  const phone=document.getElementById('phone').value;
  const addr=document.getElementById('addr').value;
  if(!svc||!date||!time||!name||!phone||!addr){alert('Please complete all required fields.');return;}
  const details = `Service: ${svc}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phone}\nAddress: ${addr}`;
  const mailto = `mailto:bookyouspaday@gmail.com?subject=New Booking Request (${svc})&body=${encodeURIComponent(details)}`;
  window.location.href = mailto;
  document.getElementById('bookingForm').reset();
  document.getElementById('bookNote').innerText = 'Booking request prepared in your email client. We will confirm shortly.';
  setTimeout(()=>{document.getElementById('bookNote').innerText='';}, 6000);
}
