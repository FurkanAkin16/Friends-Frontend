import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'



const cards  = [
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676209490/My_project_erqibz.jpg',
    date: 'Bursa',
    header: 'Furkan' + '⭐️', 
    description: 'Jr Developer',
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676209602/My_project_1_icxdqj.jpg',
    date: 'Bursa',
    header: 'Oğuzhan',
    description: 'Makine mühendisi',
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676112948/resim_2023-02-11_135546398_ukqzo4.png',
    date: 'Bursa',
    header: 'Seçkin',
    description: 'Boyacı',
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676209956/inanc_vupuin.png',
    date: 'Bursa',
    header: 'İnanç',
    description: 'Dolandırıcı',
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676210210/My_project_1_d6xa3t.png',
    date: 'Bursa',
    header: 'Yunus',
    description: 'Boyacı',
  },

  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676210254/My_project_fgksyy.png',
    date: 'Bursa',
    header: 'Başkan',
    description: 'MTSK',
  
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676210624/ADNN_ghewwc.png',
    date: 'Bursa',
    header: 'ADNAN',
    description: 'KAJUCU',
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676210642/akpli_kh4jmb.jpg',
    date: 'Bursa',
    header: 'YAŞA',
    description: 'AKPLİ' + '💡',
  },
  {
    avatar: 'https://res.cloudinary.com/dqwqallnf/image/upload/v1676210621/Y%C3%BCko_gix0dp.png',
    date: 'Bursa',
    header: 'YÜKO',
    description: 'YUTUP',
  },


]

export default class PlaceholderExampleCard extends Component {
  state = { loading: false }

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <>
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Arkadaşlar
        </Button>
        <Divider />

        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </>
                )}
              </Card.Content>

              <Card.Content extra>
                <Button disabled={loading} primary title="Seçili kişiyi ekler">
                  Ekle
                </Button>
                <Button disabled={loading} title="Seçili kişiyi siler">
                  Engelle
                </Button>
               
              </Card.Content>

            </Card>
          ))}
        </Card.Group>
      </>
    )
  }
}
