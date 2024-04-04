// loops and renders dogs
import { Card } from 'antd';
const { Meta } = Card;
export default function DogContainer({dogData}) {
    return(
        <>
        <div>
            {dogData.map((dog) => (
                 <Card
                 hoverable
                 style={{
                   width: 240
                 }}
                 cover={<img alt="example" style={{ width: 220 }} src={dog.photo} />}
               >
                 <Meta title={dog.dog_name} description={dog.breed} />
               </Card>
            ))}
        </div>
        </>
    )
}