import React from 'react'
import { Link } from 'gatsby'
import Title from '../global/Title'

export default function Info() {
    return (
        <section className="py-5">
        <div className="container">
        <Title title="Our Coffee and Coding Story"/>
        <div className="row">
       <div className="col-10 col-sm8 mx-auto text-center">
       <p className="text-dgrey mb-4">And grounds percolator beans, that et pumpkin spice grounds strong single shot sweet spoon. Extra, acerbic, fair trade plunger pot, wings, galão viennese caffeine. Instant filter grounds qui foam breve strong barista pumpkin spice. Trifecta fair trade latte frappuccino kopi-luwak in instant milk. Decaffeinated, barista beans, grounds aroma barista eu flavour.</p>
       <Link to="/about/">
       <button className="btn text-uppercase btn-green">
                about
              </button>
       </Link>

       </div>

        </div>
        </div>
        </section>
    )
}