import React, { useState } from 'react'

export default function Card({ card }) {
  const [selected, setSelected] = useState(false)

  const clickHandler = () => {
    if (!card.disabled) {
      selected ? setSelected(false) : setSelected(true)
    }
  }

  if (card.disabled) {
    return (
      <div className='block__card card card_disabled'>
        <div className="card__content">
          <div className="card__text-wrapper">
            <p className="card__tagline">{card.tagline}</p>
            <h3 className="card__title">{card.title}</h3>
            <h4 className="card__taste">{card.taste}</h4>
            <div className="card__description">
              {card.description.map((p, key) => <p key={key}>{p}</p>)}
            </div>
          </div>
          <img src="./img/cat.png" alt="cat" className="card__img" />
          <div className="card__weight">
            <p className="card__weight-number">{card.weight}</p>
            <p className="card__weight-units">кг</p>
          </div>
        </div>
        <p className="card__text">Печалька, {card.taste} закончился.</p>
      </div>
    )
  } else {
    return (
      <div className={(selected) ? 'block__card card card_selected' : 'block__card card card_notselected'} disabled={card.disabled}>
        <div className="card__content" onClick={clickHandler}>
          <div className="card__text-wrapper">
            <p className="card__tagline">{card.tagline}</p>
            <h3 className="card__title">{card.title}</h3>
            <h4 className="card__taste">{card.taste}</h4>
            <div className="card__description">
              {card.description.map((p, key) => <p key={key}>{p}</p>)}
            </div>
          </div>
          <img src="./img/cat.png" alt="cat" className="card__img" />
          <div className="card__weight">
            <p className="card__weight-number">{card.weight}</p>
            <p className="card__weight-units">кг</p>
          </div>
        </div>
        {selected && <p className="card__text">{card.text}</p>}
        {!selected && <p className="card__text">Чего сидишь? Порадуй котэ, <button className='card__button' onClick={clickHandler}>купи</button>.</p>}
      </div>
    )
  }
}
