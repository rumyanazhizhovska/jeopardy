function ButtonRow({ categories, valueIndex }) {
    return( <div>
        <button>
            {categories[0].questions[valueIndex].value}
        </button>

        <button>
            {categories[1].questions[valueIndex].value}                 
        </button>

        <button>
            {categories[2].questions[valueIndex].value}
        </button>

        <button>
            {categories[3].questions[valueIndex].value}
        </button>
        
        <button>
            {categories[4].questions[valueIndex].value}
        </button>
    </div> );
}

export default ButtonRow;
