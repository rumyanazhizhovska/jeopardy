function ButtonColumn({ categories, index }) {
    return( <div>
        <button>
            {categories[index].questions[0].value}
        </button>

        <button>
            {categories[index].questions[1].value}                 
        </button>

        <button>
            {categories[index].questions[2].value}
        </button>

        <button>
            {categories[index].questions[3].value}
        </button>
        
        <button>
            {categories[index].questions[4].value}
        </button>
    </div> );
}

export default ButtonColumn;