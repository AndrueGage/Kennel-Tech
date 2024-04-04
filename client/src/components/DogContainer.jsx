// loops and renders dogs
import { Card } from 'antd';
const { Meta } = Card;
export default function DogContainer({dogData}) {
    return(
        <>
        <div>
            {dogData.map((dog, index) => (
                 <Card
                 hoverable
                 style={{
                   width: 240,
                 }}
                 cover={<img alt="example" src={dog.photo} />}
               >
                 <Meta title={dog.dog_name} description={dog.breed} />
               </Card>
            ))}
        </div>
        </>
    )
}

