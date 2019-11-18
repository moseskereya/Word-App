import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const responsive = {
            myResponsiveRules: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30
            }
          }
        const letters = this.props.List
        const a = letters.splice(0,99);
        const b = letters.splice(100, 199)
        const c = letters.splice(200, 299)
        const d = letters.splice(300, 399)
        const e = letters.splice(400, 499)
        const f = letters.splice(500, 599)
        const g = letters.splice(600,699)
        const h = letters.splice(700, 779)
        const i = letters.splice(800, 899)
        const j = letters.splice(900, 999)
        const k = letters.splice(1000, 1999)
        const l = letters.splice(2000, 2999)
        const m = letters.splice(3000, 3999)
        const n = letters.splice(4000, 4999)
        const o = letters.splice(5000, 5999)
        const p = letters.splice(6000, 6999)
        const q = letters.splice(7000, 7999)
        const r = letters.splice(8000, 8999)
        const s = letters.splice(9000, 9999)
        const t = letters.splice(10100, 10199)
        const u = letters.splice(10200, 10299)
        const v = letters.splice(10300, 10399)
        const w = letters.splice(10400, 10499)
        const x = letters.splice(10500, 10599)
        const y = letters.splice(10600, 10699)
        const z = letters.splice(10700, 10799)
        const item1 = letters.splice(10800, 10899)
        const item2 = letters.splice(10900, 10999)
        const item3 = letters.splice(11000, 11999)
        return ( 
            <Carousel responsive={responsive} >
             <div className="App-header">
                    {a.map((word) => {
                        return(
                            <div  key={letters.a}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
             </div>
             <div className="App-header">
                {b.map((word) => {
                        return(
                            <div  key={letters.b}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {c.map((word) => {
                        return(
                            <div  key={letters.c}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {d.map((word) => {
                        return(
                            <div  key={letters.d}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {e.map((word) => {
                        return(
                            <div  key={letters.e}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {f.map((word) => {
                        return(
                            <div  key={letters.f}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
            <div className="App-header">
             {g.map((word) => {
                        return(
                            <div  key={letters.g}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {f.map((word) => {
                        return(
                            <div  key={letters.f}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {h.map((word) => {
                        return(
                            <div  key={letters.h}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {i.map((word) => {
                        return(
                            <div  key={letters.i}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {j.map((word) => {
                        return(
                            <div  key={letters.j}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {k.map((word) => {
                        return(
                            <div  key={letters.k}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {l.map((word) => {
                        return(
                            <div  key={letters.l}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {m.map((word) => {
                        return(
                            <div  key={letters.m}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {n.map((word) => {
                        return(
                            <div  key={letters.n}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {o.map((word) => {
                        return(
                            <div  key={letters.o}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {p.map((word) => {
                        return(
                            <div  key={letters.p}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {q.map((word) => {
                        return(
                            <div  key={letters.q}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {r.map((word) => {
                        return(
                            <div  key={letters.r}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {s.map((word) => {
                        return(
                            <div  key={letters.s}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {t.map((word) => {
                        return(
                            <div  key={letters.t}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {u.map((word) => {
                        return(
                            <div  key={letters.u}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {v.map((word) => {
                        return(
                            <div  key={letters.v}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {w.map((word) => {
                        return(
                            <div  key={letters.w}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {x.map((word) => {
                        return(
                            <div  key={letters.x}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {y.map((word) => {
                        return(
                            <div  key={letters.y}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
            <div className="App-header">
                {z.map((word) => {
                        return(
                            <div  key={letters.z}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
             <div className="App-header">
                {item1.map((word) => {
                        return(
                            <div  key={letters.item1}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {item2.map((word) => {
                        return(
                            <div  key={letters.item2}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="App-header">
                {item3.map((word) => {
                        return(
                            <div  key={letters.item3}>
                               <p>{word}</p>
                            </div>
                        )
                    })}
                </div>
            </Carousel>
         );
    }
}
 
export default App;