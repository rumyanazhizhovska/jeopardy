import ButtonColumn from './ButtonColumn';

function Board({ categories }) {
    return( <div>
        <ButtonColumn categories={categories} index = {0} />
        <ButtonColumn categories={categories} index = {1} />
        <ButtonColumn categories={categories} index = {2} />
        <ButtonColumn categories={categories} index = {3} />
        <ButtonColumn categories={categories} index = {4} />
    </div> );
}

export default Board;