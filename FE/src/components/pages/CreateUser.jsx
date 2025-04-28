'use client'
import { Button, FormLabel, Grid, MenuItem, OutlinedInput, Select } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'
import UserService from '@/services/UserService'

export default function CreateUser() {
  const [role, setRole] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    UserService.createUser(formdata)
      .then(() => toast.success('User created successfully'))
      .catch(() => toast.error('User creation failed'))
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className="flex !flex-col">
          <FormLabel htmlFor="fullname" required>
            Full Name
          </FormLabel>
          <OutlinedInput
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Enter full name"
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="flex !flex-col">
          <FormLabel htmlFor="email" required>
            Email
          </FormLabel>
          <OutlinedInput
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Grid>

        <Grid item xs={12} md={6} className="flex !flex-col">
          <FormLabel htmlFor="role" required>
            Role
          </FormLabel>
          <Select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>Customer</MenuItem>
            {/* <MenuItem value={3}>User</MenuItem> */}
          </Select>
        </Grid>

        <Grid item xs={6} md={3} className="flex !flex-col">
          <Button type="submit" variant="contained" className="bg-primary">
            Create
          </Button>
        </Grid>
        <Grid item xs={6} md={3} className="flex !flex-col">
          <Button href="/admin/user" variant="contained" color="error" className="bg-error">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}