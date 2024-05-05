import ResultItem from './resultitem';

function Results({ results }) {
    return (
      <>
        { (!!results.length)
            ? results.map(function(data) {
                return (
                    <ResultItem url={data.document_id__url} />
                )
            })
            : <p>No Results</p>
        }
      </>
    )
}


export default Results;
