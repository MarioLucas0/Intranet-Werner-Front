import Textra from 'react-textra';

export const SlideCarousel = () => {

  const sentences = ['O maior patrimônio da Werner são as pessoas!', 'Missão: Inspirar a excelência na relação com pessoas, tecidos e meio ambiente.', 'Excelência, Respeito e Confiança!  ']
  const containerStyle = { 
    maxWidth: '100%',
    maxHeight: '100%',
    textAlign: 'center',
    padding: '1em',
    fontStyle: 'italic',
    color: '#337103',
    fontSize: '2rem',
    fontWeight: 'bold'
  }

  return (
    <>
          <div className='carousel' style={containerStyle}>
              <Textra effect='flash' data={sentences} stopDuration={5000}/>
          </div>
        </>
  );
}
