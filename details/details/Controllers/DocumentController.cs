using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using details.Models;


namespace details.Controllers
{
    public class DocumentController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select Id,Name,Email,convert(varchar(10),DateOfBirth,120) as DateOfBirth ,Address from dbo.Document";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                con.Open();
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);

        }
        public string Post( Document d)
        {
            try
            {
                string query = @"Insert into dbo.Document values
                (
                 '"+d.Name+@"',
                 '"+d.Email+@"',
                 '"+d.DateOfBirth+@"',
                 '"+d.Address+@"'
                )
                ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    con.Open();
                    da.Fill(table);
                }
                return "succesfully Added";

            }
            catch (Exception)
            {
                return "Failedto Added";
            }
        }
        public string Put(Document d)
        {
            try
            {
              string query =  @"update dbo.Document set
                   Name = '" + d.Name + @"',
                   Email ='" + d.Email + @"',
                   DateOfBirth = '"+d.DateOfBirth+ @"',
                   Address = '"+d.Address+ @"'
                   where Id = "+ d.Id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    con.Open();
                    da.Fill(table);
                }
                return "Successfully Updated";
            }
            catch (Exception)
            {
                return "Failed to Updated";
            }

        }
        public string Delete(int id)
        {
            try
            {
                String query = @"delete dbo.Document 
                 where Id = " + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    con.Open();
                    da.Fill(table);
                }
                return "Successfully Deleted";
            }
            catch (Exception )
            {
                return "Failed to Deleted";
            }
        }
          
    }
}
