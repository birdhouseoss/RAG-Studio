import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Collections</h2>
            <div className="flex items-center space-x-2">
              <Button>Add new collection</Button>
            </div>
          </div>
          <CollectionsList />
        </div>
      </div>
    </>
  )
}

function CollectionsList() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 md:p-6 lg:grid-cols-4">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex flex-col items-center justify-center p-6">
          <FolderIcon className="h-16 w-16 text-yellow-500" />
          <h3 className="mt-2 text-xl font-bold">Folder 1</h3>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex flex-col items-center justify-center p-6">
          <FolderIcon className="h-16 w-16 text-yellow-500" />
          <h3 className="mt-2 text-xl font-bold">Folder 2</h3>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex flex-col items-center justify-center p-6">
          <FolderIcon className="h-16 w-16 text-yellow-500" />
          <h3 className="mt-2 text-xl font-bold">Folder 3</h3>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex flex-col items-center justify-center p-6">
          <FolderIcon className="h-16 w-16 text-yellow-500" />
          <h3 className="mt-2 text-xl font-bold">Folder 4</h3>
        </div>
      </div>
    </div>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}
