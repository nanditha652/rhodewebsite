import React from 'react'
import edit from '../images/editlip.jpg';
import featur from '../images/featured.jpg';
import haliya from '../images/hailye.webp';
import dizajn from '../images/Dizajn.png';
import black from '../images/travel.jpg';
import rhode from '../images/blackrhode.jpeg';
import black2 from '../images/black2.jpeg';
import blc from '../images/bl3.jpeg'
import blcase from '../images/case.jpeg'
import lemon from '../images/lemontini.jpeg'
import eye from '../images/eye.jpeg'
import on from '../images/on.jpeg'
import tral from '../images/travel.jpg'
import skin from '../images/skin.jpeg'
import tr4 from '../images/tr3lip.jpeg'
import tr1 from '../images/menu.jpeg'
import tr2 from '../images/triostrawberry.jpeg'
import tr3 from '../images/trplt2.jpeg'

import './Homecreate.css'

function Homecreate() {
  return (
<div>
<section className='create1'>
<div className='row1'>
<div className='col1'>
  <h2 className='texth2'>best of rhode</h2>
  <p>We’re honored that Barrier Butter has just received a 2025
  <br/> Allure Best of Beauty Award for Best Rich Facial Moisturizer.<br/>
  Since its launch last fall, our intensive moisture
  balm quickly<br/> become your go-to for decadent hydration and all-over glow.</p>
  <button className='btn1'>Shop now</button>

</div>

<div className='col2'>
  
  <img className='img1' src={edit} alt='...'/>
  <h2>editilip</h2>
</div>

</div>
</section><br/>
<br/>
<div>
  <section className='create2'>
    <div className='row2'>
      <div className='col3'>
      <img className='img2' src={featur} alt='...'/>
      <h2>Pocket blush</h2>
      <p>A little blush for a little flush.Our on-the-go<br/> cream blush wakes up cheeks and lips with a<br/> satiny, diffused flush that melts on smoothly<br/> and stays all day. It’s lightweight formula that<br/> hydrates skin for baby-soft cheeks and leaves<br/> a glowy finish without greasy feel. </p>
      </div> 

      <div className='col4'>
        <h2>Lipshade</h2>
        <p>rhode Peptide lip Designed<br/>
         to nourish your lip allLip care<br/> is skincare. Peptide Lip Tint is<br/> a nourishing formula with hint<br/> of tint that hydrates and replenishes<br/> lips</p>
      <img className='img3' src={haliya} alt='...'/>
      </div>
    </div>
  </section>
</div>

<div>
  <section className='create3'>
    <div>
      <img className='img4' src={dizajn} alt='...'/>
    </div>
  </section>
</div>

<div>
  <section className='create4'>
    <div className='row3'>
      <div className='col6'>
        <img className='img5' src={black} alt='...'/>
      </div>
      <div className='col5'>
        <h2 className='text5'>The rhode kit</h2>
        <p>Get ready with rhode. Our set of four skin prep<br/> essentials provides dewy moisture to prime skin<br/> for better makeup application and create a smooth,<br/> glowy base. Peptide Eye Prep depuffs and brightens<br/> under the eyes, Glazing Mist refreshes skin for a next<br/> Peptide Glazing Fluid hydrates and brightens Barrier<br/> Butter seals it all in with buttery, intensive moisture.</p>
        <button className='btn3'>Buy now</button>
      </div>

    </div>
  </section>
</div>

<div>
  <section className='create5'>
    <div className='row4'>
      <h2>Glazing milk</h2>
      <div className='col6'>
        <img className='img6' src={rhode} alt='...'/>
      </div>
      <div className='col7'>
        <img className='img7' src={black2} alt='...'/>
      </div>
      <div className='col8'>
        <img className='img8' src={blc} alt='...'/>
      </div>

    </div>
  </section>
</div>

<div>
  <section className='create6'>
    <div className='row5'>
      <div className='col9'>
        <img className='img9' src={blcase} alt='...'/>
      </div>
      <div className='col10'>
        <img className='img10' src={lemon} alt='...'/>
      </div>
    </div>
    <h2>Case</h2>
    <h3>rhode lemon</h3>
  </section>
</div>
<div>
  <section className='create7'>
    <div className='row6'>
      <div className='col11' >
        <img className='img11' src={eye} alt='...'/>
      </div>

      <div className='col12' >
        <img className='img12' src={on} alt='...'/>
      </div>

      <div className='col13' >
        <img className='img13' src={tral} alt='...'/>
      </div>

      <div className='col14' >
        <img className='img14' src={skin} alt='...'/>
      </div>

    </div>
  </section>
</div>

<div>
  <section className='create8'>
    <div className='row7'>
      <div className='col15' >
        <img className='img15' src={tr4} alt='...'/>
      </div>

      <div className='col16' >
        <img className='img16' src={tr1} alt='...'/>
      </div>

      <div className='col17' >
        <img className='img17' src={tr2} alt='...'/>
      </div>

      <div className='col18' >
        <img className='img18' src={tr3} alt='...'/>
      </div>

    </div>
  </section>
</div><br/>
<br/>

</div>
  )
}

export default Homecreate
