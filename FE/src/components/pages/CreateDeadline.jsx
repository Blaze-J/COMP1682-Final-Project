
'use client'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, MenuItem, Select } from '@mui/material';
import SelectRole from '../ui/SelectRole';
import UserService from '@/services/UserService';
import { toast } from 'react-toastify';
import SelectMc from '../ui/SelectMc';

import DeadlineService from '@/services/OrderService';


export default function CreateDeadline({id}) {

  const onSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    DeadlineService.createDeadline(formdata).then(x => {
      toast.success('add success')

    }).catch(err => {
      toast.error('add failed')
    })
  }

  return (
    <form onSubmit={onSubmit} className='mx-[200px]'>
      <input type="hidden" name="contributionid" value={id} />
      <Grid container spacing={3} >
        <Grid item xs={12} md={6} className='flex !flex-col' >
          <FormLabel htmlFor="name" required>
            Name
          </FormLabel>
          <OutlinedInput
            id="name"
            name="name"
            type="text"
            placeholder="enter name"
            autoComplete="name"
            required
          />
        </Grid>
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="name" required>
            Closure Date
          </FormLabel>
          <OutlinedInput
            id="closuredate"
            name="closuredate"
            type="datetime-local"
            placeholder="Select closure date"

            required
          />
        </Grid>
        <Grid item xs={12} md={6} className='flex !flex-col'>
          <FormLabel htmlFor="finalclosuredate" required>
            Final Closure Date
          </FormLabel>
          <OutlinedInput
            id="finalclosuredate"
            name="finalclosuredate"
            type="datetime-local"
            placeholder="Select final closure date"
            required
          />
        </Grid>
        <Grid item xs={12} md={12} className='flex !flex-col'>
          <FormLabel htmlFor="description" >Description</FormLabel>
          <textarea name="description" id="" cols="10" rows="5"></textarea>
        </Grid>

        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button type='submit' variant='contained' className='bg-primary'>Create</Button>
        </Grid>
        <Grid item xs={6} md={3} className='flex !flex-col'>
          <Button href='/coordinator/index' type='button' variant='contained' color='error' className='bg-error'>Cancel</Button>
        </Grid>
      </Grid>
    </form >
  )
}
