var lamp = document.getElementById('img2');
              
              lamp.addEventListener('click', () =>{
                if (lamp.className == 'desligado'){  
                    img1.src="img/img_bulbon.png";
                    img2.src="img/interruptoron.png";
                    img2.className='ligado';
                    document.body.style.backgroundColor ='white'}
                else{
                    img1.src="img/img_bulboff.png";
                    img2.src="img/interruptoroff.png";
                    img2.className='desligado';
                    document.body.style.backgroundColor ='black'}
              });