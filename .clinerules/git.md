# Git Workflow Rules

1. **General rules**
   - Use github MCP for interacting with github

2. **Branch Management**
   - Primary branch: `main` (all work merges here)
   - Always create feature branches: `feature/[brief-description]`. Use `git` binary for this
   - Verify current branch with `git status` before making changes

3. **Code Changes**
   - Commit only when instructed
   - Stage changes only when instructed
   - Push changes only when instructed

4. **Pull Requests**
   - Use MCP tools for all GitHub interactions:
     - `create_pull_request` for PR creation
     - `request_copilot_review` for automated reviews
     - `submit_pending_pull_request_review` for PR feedback
   - PRs must target `main` branch
   - When asked to create PR (or to create pull request), ensure you're on feature branch, commit and push first

5. **Branch Protection**
   - Direct commits to `main` blocked
   - All changes require PR review
   - Use `update_pull_request_branch` to sync with main
