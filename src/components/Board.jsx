import ButtonColumn from './ButtonColumn';
// questionsData.categories er nå en liste med alle kategoriene

function Board() {
    return <div>
        <ButtonColumn index = {0} />
        <ButtonColumn index = {1} />
        <ButtonColumn index = {2} />
        <ButtonColumn index = {3} />
        <ButtonColumn index = {4} />
    </div>;
}

export default Board;