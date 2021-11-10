select * from [dbo].[USER]

SELECT a.ID, a.UserName, b.UserName AS 'ParentUserName'
FROM [dbo].[USER] AS a LEFT JOIN [dbo].[USER] AS b on a.Parent = b.ID



