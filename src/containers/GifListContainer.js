import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGIFs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=L7QbQ6w6R6tbZOE8qrTdNiQQe16CDcht&limit=3`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }
    
    componentDidMount() {
        this.fetchGIFs()
    }
    
    render() {
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

  
}

export default GiftListContainer;