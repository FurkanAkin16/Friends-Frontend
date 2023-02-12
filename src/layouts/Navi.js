import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
    <div>
        <Label as='a' href='https://twitter.com/majorzfps' color='blue' image target='_blank'>
            <img src='https://res.cloudinary.com/dqwqallnf/image/upload/v1676208124/315531362_861141441563798_7604373643889042061_n_jttqrw.jpg' />
            Furkan
            <Label.Detail>Head Admin</Label.Detail>
        </Label>


        <Label as='a' href='https://twitter.com/OguzhanCarus' color='blue' image target='_blank'>
            <img src='https://res.cloudinary.com/dqwqallnf/image/upload/v1676112815/WhatsApp_Image_2023-01-23_at_09.27.15_enh17t.jpg' />
            Oguzhan
            <Label.Detail>Vice President
            </Label.Detail>

        </Label>
    </div>
)

export default LabelExampleImage


