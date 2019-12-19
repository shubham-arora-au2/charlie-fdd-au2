import React from 'react';


class Viewer extends React.Component{

    render(){
        console.log(this.props)
        return(
        <iframe frameborder="0" scrolling="no" style={{border:"0px"}} src={`https://books.google.co.in/books?id=${this.props.match.params.bookId}&lpg=PP1&pg=PT19&output=embed`} width='100%' height='1000px'>

        </iframe>
        )
    }
}

export default Viewer