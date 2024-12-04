export const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">KickStat</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="/" className="hover:text-blue-200">Home</a></li>
              <li><a href="/standings" className="hover:text-blue-200">Standings</a></li>
              <li><a href="/matches" className="hover:text-blue-200">Matches</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };