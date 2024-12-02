import { Component } from 'react'
import React from 'react'
import Slider from 'react-slick'
import { Card } from 'react-bootstrap'

class MySlider extends Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      cssEase: 'linear',
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }
  render() {
    return (
      <div
        className='slider-container px-5'
        onClick={() => {
          console.log(this.props.fantasyBook)
        }}
      >
        <Slider {...this.state.settings} className='pt-5 text-light'>
          {this.props.fantasyBook.slice(0, 12).map((singleBook, index) => {
            return (
              <Card key={index} className='h-100'>
                <Card.Img variant='top' src={singleBook.img} />
                <Card.Body>
                  <Card.Title>{singleBook.title}</Card.Title>
                </Card.Body>
              </Card>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default MySlider
