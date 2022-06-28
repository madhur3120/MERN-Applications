import React,{useState} from 'react'

const BasicForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    
    const submitForm=(e)=>{
        e.preventDefault();
        if(name&&email&&date)
        {
        const newEntry = {id: new Date().getTime().toString(),name,email, phone,date };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        }
        else
        {
            alert("please fill the data");
        }
        
    }
  return (
    <>
    <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor='text'>Name</label>
            <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor='phone'>phone</label>
            <input type="number" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div>
            <label htmlFor='date'>Date</label>
            <input type="date" name="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
    </form>

    <div>
        {
            allEntry.map((curElem)=>{
                const {id,name,email,phone,date}=curElem;
                return (
                    <div className='showDataStyle' key={curElem.id}>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{date}</p>
                        </div>
                )
            })
        }
    </div>
    </>
  )
}

export default BasicForm