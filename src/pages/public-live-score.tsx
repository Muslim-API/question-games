// import { createClient } from "@supabase/supabase-js";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
const HTTP_CREATED = 201;

// const supabaseClient = createClient("google.com", "as");

const SubmitYourScore = () => {
const handleInserts = (payload: any) => {
  console.log('Change received!', payload)
}

// supabaseClient
//   .channel('scoreboard')
//   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'scoreboard' }, handleInserts)
//   .subscribe()
    return (
        <div className="item-center justify justify-center">
           wawawa
        </div>
    )
}

export default SubmitYourScore
