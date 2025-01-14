import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center" >
      <h2 className='text-2x1 md:text-4x1 1g:text-6x1 uppercase' >
        WELCOME TO
      </h2>
      <h1 className='text-3x1 md:text-6x1 1g:text-8x1 font-black uppercase mb-8' >The coding club</h1>
      <div className='text-1g md:text-2x1 1g:text-3x1 py-2 px-4 md:py-4
       md:px-10 1g:py-6 1g:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full' >
        942,243 members
      </div>
      <form 
					action="https://github.com/mamonewimer?tab=repositories" 
					method="put" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with Revue's <a target="_blank" href="https://github.com/mamonewimer?tab=repositories" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with 💓 by Mamon Eweimer</p>
        <div className="flex -mx-6" >
          <a href="#" className="mx-3 hover:opacity-80 duration-150" >About us</a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150" >Privacy</a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150" >Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
