import { userContext } from '@/lib/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from './ui/badge'
import { Label } from './ui/label'

function UserInfo() {
  const { user } = useContext(userContext)
  const navigate = useNavigate()
  if (!user) {
    navigate('/')
  }
  return (
    <div className="flex flex-col  w-fit border items-center rounded-lg gap-1 p-2">
      <Label className="text-md">Username:</Label>
      <Badge className="bg-blue-100 text-md" variant="secondary">
        {user?.username}
      </Badge>
    </div>
  )
}

export default UserInfo
