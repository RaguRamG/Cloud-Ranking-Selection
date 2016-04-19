#!/Python27/python
import json,urllib2,xlrd,cgi

from xlrd import open_workbook
print "Content-type: text/html"
print 
form = cgi.FieldStorage()

workbook = xlrd.open_workbook('TabulatedSLA.xlsx')
worksheet = workbook.sheet_by_index(1)
first_row = [] # The row where we stock the name of the column

val = [1,1,1,1,0,0,0,0,0,0,0,0,0]
'''val.append(1)
val.append(1)
val.append(1)
for i in range(4,13):
    param = "p" + str(i)
    val.append(int(form.getvalue(param)))'''


val[3] = int(form.getvalue("p1"))
val[4] = int(form.getvalue('p2'))
val[5] = int(form.getvalue('p3'))
val[6] = int(form.getvalue('p4'))
val[7] = int(form.getvalue('p5'))
val[8] = int(form.getvalue('p6'))
val[9] = int(form.getvalue('p7'))
val[10] = int(form.getvalue('p8'))
val[11] = int(form.getvalue('p9'))
val[12] = int(form.getvalue('p10'))



for col in range(worksheet.ncols - 1):
    first_row.append( worksheet.cell_value(0,col) )
    

# transform the workbook to a list of dictionnary
data =[]
for row in range(0, worksheet.nrows):
    elm = {}
    for col in range(worksheet.ncols - 1):
        if val[col] == 1:
            elm[first_row[col]]=worksheet.cell_value(row,col)
    data.append(elm)
   
    
ndata = json.dumps(data)

print ndata
#print form.getvalue("param")

