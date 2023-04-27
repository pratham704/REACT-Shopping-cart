import { useSelector } from 'react-redux';
export default function Test() {

    const mine = useSelector((lo)=>lo.Reducermine)





console.log(mine)

  return (
 <>




 <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <p><span className="h2">Shopping Cart </span></p>

        <div className="card mb-4">
          <div className="card-body p-4">

            <div className="row align-items-center">
           
              <div className="col-md-2 d-flex w-100 justify-content-center">
            
              </div>
       
          
             
           
            </div>

          </div>
        </div>

       

       

      </div>
    </div>
  </div>
</section> 




   </>
  )
}



















































