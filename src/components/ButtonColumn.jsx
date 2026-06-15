import questionsData from '../questions.json';

function ButtonColumn(index) {
    return <div>
        <button question={questionsData.categories[index].questions[0]}>
            Button 1
        </button>

        <button question={questionsData.categories[index].questions[1]}>
            Button 2
        </button>
        <button question={questionsData.categories[index].questions[2]}>
            Button 3
        </button>
        <button question={questionsData.categories[index].questions[3]}>
            Button 4
        </button>
        <button question={questionsData.categories[index].questions[4]}>
            Button 5
        </button>
    </div>;
}

export default ButtonColumn;