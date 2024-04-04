import Card from '../components/Card'
import DogContainer from '../components/DogContainer';

export default function HomePage() {
    const dogs = [
        { dog_name: "Max", age: 5, breed: "Golden Retriever", photo: "https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg" },
        { dog_name: "Bella", age: 3, breed: "Labrador Retriever", photo: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*" },
        { dog_name: "Charlie", age: 2, breed: "Poodle", photo: "https://media-be.chewy.com/wp-content/uploads/2022/09/27101923/cute-dogs-pomeranian.jpg" },
      ];
    return (
        <div className="home-container">
            <div className="dog-cards">
            {dogs.length ? <DogContainer dogData={dogs}/> : <p>Add your dog!</p>}
            </div>
            <Card />
            </div>
    )
}