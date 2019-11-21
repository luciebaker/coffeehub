import React, { Component } from 'react'
import Title from '../global/Title'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category    
    })
    let tempCategories = new Set (tempItems)
    let categories = Array.from(tempCategories)
    categories = ['All', ...categories]
    return categories
}

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state ={
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }
    handleItems = category => {
        let tempItems = [...this.state.items]
        if (category === "All") {
            this.setState(() => {
                return {coffeeItems: tempItems}
            })
        } else {
            let items = tempItems.filter(({node}) => node.category === category)
            this.setState(() => {
                return {coffeeItems: items}
            })
        }
    }
    render() {
        if(this.state.items.length > 0) {
          return (
            <section className="menu py-5">
            <div className="container">
            <Title title="Our Coffee Menu" />
            {/* categories  */}
            <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
            {this.state.categories.map((category, index) => {
                return (<button 
                    type="button" 
                    key={index} 
                    className="btn btn-green m-3" 
                    onClick= {() => {
                        this.handleItems(category)}}>
                    {category}
                    </button> )
            })}
            </div>
            </div>
            {/* items  */}
            <div className="row">
                {this.state.coffeeItems.map(({node}) => {
                    return(
                        <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                        <div className="flex-grow-1 px-3">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-0"> {node.name} </h5>
                                <h5 className="mb-0"> $ {node.price.toFixed(2)} </h5>
                            </div>
                                <p className="text-dgrey">
                                <small>{node.description}</small>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
            </section>
          )  
        } else {
          return (<section className="menu py-5">
          <div className="container">
          <Title title="Best of Our Menu" />
          <div className="col-10 col-sm-6 mx-auto text-center">
          <h1>Oops... There are no items to display</h1>
          </div>
          </div>
          </section>)  
        }
    }
}
