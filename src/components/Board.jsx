import ButtonRow from './ButtonRow';

function Board({ categories }) {
    return( <div>
        <ButtonRow categories={categories} valueIndex = {0} />
        <ButtonRow categories={categories} valueIndex = {1} />
        <ButtonRow categories={categories} valueIndex = {2} />
        <ButtonRow categories={categories} valueIndex = {3} />
        <ButtonRow categories={categories} valueIndex = {4} />
    </div> );
}

export default Board;